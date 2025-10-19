import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userPreferences, browsedCategories, currentPage } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Getting AI recommendations for:", { userPreferences, browsedCategories, currentPage });

    const systemPrompt = `You are a Halloween costume recommendation expert. Based on user preferences and browsing history, suggest 3-5 highly relevant Halloween costume products. 

For each recommendation, provide:
- title: Catchy product name
- description: Brief description (1-2 sentences)
- category: One of: adults, kids, couples, groups, accessories
- price_range: e.g., "$20-$40"
- affiliate_keywords: 3-5 keywords for finding this on Amazon

Focus on trending, popular Halloween costumes that match the user's interests. Be creative but practical.`;

    const userPrompt = `User preferences: ${JSON.stringify(userPreferences || {})}
Browsed categories: ${browsedCategories?.join(", ") || "none yet"}
Current page: ${currentPage || "homepage"}

Suggest Halloween costume products that would appeal to this user.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "suggest_products",
              description: "Suggest Halloween costume products",
              parameters: {
                type: "object",
                properties: {
                  recommendations: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                        category: { type: "string", enum: ["adults", "kids", "couples", "groups", "accessories"] },
                        price_range: { type: "string" },
                        affiliate_keywords: { 
                          type: "array",
                          items: { type: "string" }
                        }
                      },
                      required: ["title", "description", "category", "price_range", "affiliate_keywords"]
                    }
                  }
                },
                required: ["recommendations"]
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "suggest_products" } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    console.log("AI response:", JSON.stringify(data));

    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error("No tool call in response");
    }

    const recommendations = JSON.parse(toolCall.function.arguments).recommendations;
    
    // Add Amazon affiliate links
    const enrichedRecommendations = recommendations.map((rec: any) => ({
      ...rec,
      amazonLink: `https://www.amazon.com/s?k=${encodeURIComponent(rec.affiliate_keywords.join(" "))}&tag=YOUR_AFFILIATE_TAG`
    }));

    console.log("Generated recommendations:", enrichedRecommendations);

    return new Response(
      JSON.stringify({ recommendations: enrichedRecommendations }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in get-recommendations:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
