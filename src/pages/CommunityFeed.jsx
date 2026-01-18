import { useState, useEffect } from "react";
import PostComposerModal from "../components/community/PostComposerModal";
import PostCard from "../components/community/PostCard";
import CommunityCard from "../components/community/CommunityCard";
import ComingSoonModal from "../components/ui/ComingSoonModal";

import communityImg1 from "../assets/01.png";
import communityImg2 from "../assets/02.png";
import communityImg3 from "../assets/03.png";

export default function CommunityFeed() {
  const [openComposer, setOpenComposer] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const communities = [
    { name: "Mental Wellness", members: "0 members", image: communityImg1 },
    { name: "Fitness & Nutrition", members: "0 members", image: communityImg2 },
    { name: "Chronic Care Support", members: "0 members", image: communityImg3 },
  ];

  const posts = [
    {
      id: 1,
      author: "Dr. Mathias",
      role: "Medical Advisor",
      content:
        "Mental health is just as important as physical health. Seeking support early can make a huge difference.",
      time: "1 day ago",
    },
    {
      id: 2,
      author: "Sarah M.",
      role: "Community Member",
      content:
        "What are some healthy routines you follow to manage stress during busy weeks?",
      time: "3 days ago",
    },
  ];

  const handleFeatureClick = () => {
    setShowNotice(true);
  };

  return (
    <div className="space-y-20">

      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Communities</h1>
        <p className="text-gray-300 max-w-2xl">
          Discover and engage in health-focused communities. Share experiences,
          ask questions, and support one another.
        </p>
      </section>

      {/* COMMUNITY GRID */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Explore Communities</h2>
          <span className="text-sm text-gray-400">More coming soon</span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <div
              key={index}
              onClick={handleFeatureClick}
              className="group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <CommunityCard
                name={community.name}
                members={community.members}
                image={community.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FEED HEADER */}
      <section className="flex items-center justify-between max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold">Community Feed</h2>
          <p className="text-sm text-gray-400 mt-1">
            See what people are talking about across all communities
          </p>
        </div>

        <button
          onClick={handleFeatureClick}
          className="px-5 py-2.5 bg-accent text-primary rounded-xl text-sm font-semibold hover:opacity-90 transition shadow-md"
        >
          Create Post
        </button>
      </section>

      {/* FEED */}
      <section className="max-w-3xl space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="transition hover:scale-[1.01]">
            <PostCard {...post} />
          </div>
        ))}
      </section>

      {/* NOTICE MODAL */}
      <ComingSoonModal
        open={showNotice}
        onClose={() => setShowNotice(false)}
        title="Community Features Coming Soon"
        message="Community interactions, posting, and joining communities are currently unavailable on the website. These features will be accessible soon. For now, you can explore what is coming."
      />
    </div>
  );
}
