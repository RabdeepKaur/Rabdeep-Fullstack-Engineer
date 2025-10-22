"use cleint"
import { VscGitPullRequest } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';
import { BiGitMerge } from 'react-icons/bi';
import { motion } from "framer-motion";

export default function OpenSourceContributions() {
  const contributions = [
    {
      title: "Enhancement: Show checkmark after copy button is clicked in Get Started in seconds section in the landing page ",
      repo: "shuttle-hq/www",
      prNumber: 512,
      status: "Merged", 
      link: "https://github.com/shuttle-hq/www/issues/494",
      description: "Show a temporary checkmark icon replacing the copy icon after the button is clicked, and revert back after ~1 seconds. This provides clear feedback to the user that the copy action was successful."
    },
    {
      title: "The implementation of a Testimonial card feature.",
      repo: "Rehabify",
      prNumber: 129,
      status: "merged",
      link: "https://github.com/Ratnesh-Team/Rehabify/pull/136",
      description: "Adding a testimonial card feature to showcase user feedback and reviews."
    },
  ];

  const getStatusConfig = (status: string) => {
    switch(status) {
      case "merged":
        return {
          icon: BiGitMerge,
          color: "text-purple-400 border-purple-400/30 bg-purple-400/10",
          label: "Merged"
        };
      case "open":
        return {
          icon: VscGitPullRequest,
          color: "text-green-400 border-green-400/30 bg-green-400/10",
          label: "Open"
        };
      case "closed":
        return {
          icon: VscGitPullRequest,
          color: "text-red-400 border-red-400/30 bg-red-400/10",
          label: "Closed"
        };
      default:
        return {
          icon: VscGitPullRequest,
          color: "text-gray-400 border-gray-400/30 bg-gray-400/10",
          label: "Unknown"
        };
    }
  };
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen container flex items-center justify-center py-12">
      <div className="w-full max-w-[768px] mx-auto px-4 sm:px-5 lg:px-0">
        <h2
          
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 ">
          Open Source Contributions
        </h2>

        <div className="space-y-4">
          {contributions.map((pr, index) => {
            const statusConfig = getStatusConfig(pr.status);
            const StatusIcon = statusConfig.icon;

            return (
              <a
                key={index}
                href={pr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                className="border rounded-lg p-4 sm:p-5 hover:bg-gray-800/60 hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                  
                    <div className={`flex-shrink-0 p-2 rounded-md border ${statusConfig.color}`}>
                      <StatusIcon className="text-xl sm:text-2xl" />
                    </div>

                 
                    <div className="flex-1 min-w-0">
                     
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold group-hover:text-blue-400 transition-colors">
                          {pr.title}
                        </h3>
                        <FiExternalLink className="flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors mt-1" />
                      </div>

                    
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
                        <span className="font-mono">{pr.repo}</span>
                        <span>•</span>
                        <span className="font-mono">#{pr.prNumber}</span>
                        <span>•</span>
                        <span className={`${statusConfig.color.split(' ')[0]} font-medium`}>
                          {statusConfig.label}
                        </span>
                      </div>

                     
                      <p className="text-gray-400 text-sm sm:text-base">
                        {pr.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        
        <div className="mt-8 text-center">
          <a
            href="https://github.com/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3  hover:bg-green-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg transition-all duration-300"
          >
            <VscGitPullRequest className="text-xl" />
            <span>View All Contributions</span>
            <FiExternalLink className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}