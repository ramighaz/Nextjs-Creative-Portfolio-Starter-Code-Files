import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Project One",
    description:
      "import RUN from \"@/RUN-project\";\n\n<span class='text-blue-400'>export</span> <span class='text-purple-400'>default</span> <span class='text-green-400'>function</span> Project1() {\n  <span class='text-blue-400'>return</span> (\n    &lt;&gt;\n      <span class='text-orange-400'>&lt;p&gt;</span>text about the project<span class='text-orange-400'>&lt;/p&gt;</span>\n      <a href='https://example.com/project-one' class='text-yellow-400 hover:underline' target='_blank'>&lt;RUN/&gt;</a>\n    &lt;/&gt;\n  );\n}",
    link: "https://example.com/project-one",
  },
  {
    name: "Project Two",
    description:
      "import RUN from \"@/RUN-project\";\n\n<span class='text-blue-400'>export</span> <span class='text-purple-400'>default</span> <span class='text-green-400'>function</span> Project2() {\n  <span class='text-blue-400'>return</span> (\n    &lt;&gt;\n      <span class='text-orange-400'>&lt;p&gt;</span>Another project description<span class='text-orange-400'>&lt;/p&gt;</span>\n      <a href='https://example.com/project-two' class='text-yellow-400 hover:underline' target='_blank'>&lt;RUN/&gt;</a>\n    &lt;/&gt;\n  );\n}",
    link: "https://example.com/project-two",
  },
];

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [key, setKey] = useState(0); // This will force a re-render to reset animation
  const router = useRouter();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setKey((prevKey) => prevKey + 1); // Trigger re-render
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-800">
        <button
          onClick={() => router.push("/")}
          className="block w-full text-left py-2 px-4 mb-4 rounded bg-blue-600 hover:bg-blue-500"
        >
          Home
        </button>
        <h2 className="text-lg font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(project)}
            className="block w-full text-left py-2 px-4 mb-2 rounded bg-gray-700 hover:bg-gray-600"
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Main Display */}
      <div className="w-3/4 p-6 bg-gray-900 border-l border-gray-700 font-mono text-sm">
        {selectedProject ? (
          <motion.pre
            key={key} // Forces re-render to restart animation
            className="text-green-400"
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
            dangerouslySetInnerHTML={{ __html: selectedProject.description }}
          />
        ) : (
          <p className="text-gray-400">Select a project to see details...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;