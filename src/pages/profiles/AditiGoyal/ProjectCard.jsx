const ProjectCard = ({
  title,
  tech,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  details,
}) => {
  return (
    <div className="bg-[#181818] rounded-xl p-6">
      <div className="text-white rounded-xl mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-[#1E1E1E] text-white px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={gitUrl}
            className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            href={previewUrl}
            className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
