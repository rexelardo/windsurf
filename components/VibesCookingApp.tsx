'use client';

import { useState } from 'react';
import { ChefHat, Sparkles, DollarSign, Refrigerator, Loader2 } from 'lucide-react';

interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  estimatedCost: string;
  prepTime: string;
  vibe: string;
}

export default function VibesCookingApp() {
  const [ingredients, setIngredients] = useState('');
  const [vibe, setVibe] = useState('');
  const [budget, setBudget] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const response = await fetch('/api/generate-recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients, vibe, budget }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate recipes');
      }

      const data = await response.json();
      setRecipes(data.recipes);
    } catch (err) {
      setError('Failed to generate recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Vibes Cooking
            </h1>
          </div>
          <p className="text-gray-600 mt-1 ml-11">Cook with your mood, not just your ingredients</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ingredients Input */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
                <Refrigerator className="w-5 h-5 text-orange-500" />
                What&apos;s in your fridge?
              </label>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., chicken, tomatoes, garlic, pasta, cheese..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                rows={4}
                required
              />
            </div>

            {/* Vibe Input */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
                <Sparkles className="w-5 h-5 text-pink-500" />
                What&apos;s your vibe?
              </label>
              <input
                type="text"
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                placeholder="e.g., cozy comfort food, fresh and healthy, fancy date night, quick and easy..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                required
              />
            </div>

            {/* Budget Input */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                What&apos;s your budget?
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g., $10, $20-30, budget-friendly, no limit..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Cooking up your recipes...
                </>
              ) : (
                <>
                  <ChefHat className="w-5 h-5" />
                  Generate Recipes
                </>
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8">
            {error}
          </div>
        )}

        {/* Recipes Display */}
        {recipes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-pink-500" />
              Your Personalized Recipes
            </h2>
            
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{recipe.name}</h3>
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {recipe.vibe}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{recipe.estimatedCost}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ChefHat className="w-4 h-4" />
                    <span className="text-sm">{recipe.prepTime}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Refrigerator className="w-4 h-4 text-orange-500" />
                    Ingredients
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Instructions</h4>
                  <ol className="space-y-3">
                    {recipe.instructions.map((instruction, i) => (
                      <li key={i} className="flex gap-3 text-gray-600">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>Made with ❤️ for food lovers everywhere</p>
      </footer>
    </div>
  );
}
