import { useEffect, useState } from "react";
import PostCard from "../components/community/PostCard";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import communityBanner from "../assets/05.png";

export default function CommunityDetail() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const posts = [
    {
      id: 1,
      author: "Dr. Mathias",
      role: "Medical Advisor",
      content:
        "Mental health is just as important as physical health. Seek support early.",
      time: "1d ago",
    },
    {
      id: 2,
      author: "Sarah M.",
      role: "Community Member",
      content:
        "What techniques do you use to manage stress during busy weeks?",
      time: "3d ago",
    },
  ];

  return (
    <div className="space-y-16">

      {/* HEADER */}
      <section className="relative rounded-3xl overflow-hidden shadow-xl">
        <img
          src={communityBanner}
          alt="Community banner"
          className="w-full h-[300px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 flex items-end p-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Mental Wellness</h1>
            <p className="text-gray-300 max-w-xl">
              A safe space to discuss mental health, mindfulness, and emotional wellbeing.
            </p>
            <p className="text-sm text-gray-400">0 members</p>
          </div>
        </div>
      </section>

      {/* ACTION BAR */}
      <div className="flex justify-between items-center max-w-3xl">
        <h2 className="text-xl font-semibold">Community Feed</h2>

        <button
          onClick={() => setShowNotice(true)}
          className="px-5 py-2.5 bg-accent text-primary rounded-xl text-sm font-semibold hover:opacity-90 transition shadow-md"
        >
          Join Community
        </button>
      </div>

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
        title="Community Access Coming Soon"
        message="Community participation, posting, and joining are not yet available on the website. These features will be introduced soon. You can currently explore available communities and upcoming features."
      />
    </div>
  );
}
