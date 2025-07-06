import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const comments = [
  {
    id: 1,
    author: "Lyo Mann",
    content: "Streamfi is very helpful",
    timestamp: "2m",
    likes: 0,
    replies: 0,
  },
  {
    id: 2,
    author: "Fausad sharrif",
    content: "Launching Obs studio is a very nice idea",
    timestamp: "5m",
    likes: 0,
    replies: 0,
  },
  {
    id: 3,
    author: "Kelvin kucera",
    content: "The best streaming web3 app",
    timestamp: "15m",
    likes: 0,
    replies: 0,
  },
  {
    id: 4,
    author: "Cluster Hart",
    content: "Preparing my stream upload too",
    timestamp: "20m",
    likes: 0,
    replies: 0,
  },
  {
    id: 5,
    author: "Cluster Hart",
    content: "This is looking great. Nice game",
    timestamp: "",
    likes: 0,
    replies: 0,
  },
]

export function CommentSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/Ellipse 11.png" alt={comment.author} />
              <AvatarFallback className="bg-purple-600 text-white text-xs">
                {comment.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white text-sm font-medium">{comment.author}</span>
                {comment.timestamp && <span className="text-gray-500 text-xs">{comment.timestamp}</span>}
              </div>
              <p className="text-gray-300 text-sm">{comment.content}</p>

              <div className="flex items-center space-x-4 mt-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs h-6 px-2">
                  Like
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs h-6 px-2">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-end space-x-3">
        <Textarea
          placeholder="Drop a comment"
          className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 resize-none"
          rows={1}
        />
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Send</Button>
      </div>
    </div>
  )
}
