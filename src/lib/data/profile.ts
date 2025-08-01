export interface UserProfile {
    id: string;
    name: string;
    username: string;
    avatar: string;
    followers: number;
    upvotes: number;
    badges: number;
    nft: number;
    streamfiAccount: string;
    joinedDate: string;
    bio?: string;
  }
  
  export interface ProfileStats {
    followers: number;
    upvotes: number;
    badges: number;
    nft: number;
  }
  
  export const mockUserProfile: UserProfile = {
    id: "1",
    name: "Chidinma Cassandra Chidinma",
    username: "@Chidinma Cassandra",
    avatar: "/profile-photo.jpg", 
    followers: 100,
    upvotes: 100,
    badges: 8,
    nft: 40,
    streamfiAccount: "Streamfi account",
    joinedDate: "2024",
    bio: "Passionate about streaming and community building"
  };
  
  export const mockProfileStats: ProfileStats = {
    followers: 100,
    upvotes: 100,
    badges: 8,
    nft: 40
  };