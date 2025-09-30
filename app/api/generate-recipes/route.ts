import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { ingredients, vibe, budget } = await request.json();

    if (!ingredients || !vibe || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const prompt = `You are a creative chef AI. Generate 2-3 unique and delicious recipes based on the following:

Ingredients available: ${ingredients}
Desired vibe/mood: ${vibe}
Budget: ${budget}

For each recipe, provide:
1. A creative name that matches the vibe
2. A complete list of ingredients (using what's available and adding a few common pantry items if needed)
3. Step-by-step cooking instructions
4. Estimated total cost
5. Preparation time
6. How it fits the requested vibe

Return the response as a JSON array with this exact structure:
[
  {
    "name": "Recipe Name",
    "ingredients": ["ingredient 1", "ingredient 2", ...],
    "instructions": ["step 1", "step 2", ...],
    "estimatedCost": "$X-Y",
    "prepTime": "X minutes",
    "vibe": "description of how it matches the vibe"
  }
]

Make the recipes practical, delicious, and perfectly matched to the mood. Be creative and fun!`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a creative chef AI that generates personalized recipes based on ingredients, vibes, and budget. Always respond with valid JSON arrays.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      response_format: { type: 'json_object' },
    });

    const responseText = completion.choices[0].message.content;
    
    if (!responseText) {
      throw new Error('No response from AI');
    }

    // Parse the response
    let parsedResponse = JSON.parse(responseText);
    
    // Handle different response formats
    let recipes = parsedResponse.recipes || parsedResponse;
    
    // Ensure recipes is an array
    if (!Array.isArray(recipes)) {
      recipes = [recipes];
    }

    return NextResponse.json({ recipes });
  } catch (error) {
    console.error('Error generating recipes:', error);
    return NextResponse.json(
      { error: 'Failed to generate recipes. Please try again.' },
      { status: 500 }
    );
  }
}
