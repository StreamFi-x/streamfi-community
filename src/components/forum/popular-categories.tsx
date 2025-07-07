import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Category 1",
    description: "30 new artwork this week",
  },
  {
    name: "Category 1",
    description: "30 new artwork this week",
  },
]

export function PopularCategories() {
  return (
    <Card className="bg-gray-900 border-gray-800 p-6">
      <h3 className="text-white text-lg font-semibold mb-4">Popular Categories</h3>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-1">
            <h4 className="text-white text-sm font-medium">{category.name}</h4>
            <p className="text-gray-400 text-xs">{category.description}</p>
          </div>
        ))}
      </div>

      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">See more</Button>
    </Card>
  )
}
