import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { github, netlify } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  links: { source_code: source_code_link, source_deploy: source_deploy_link },
}) => {
  const handleViewCodeClick = (e) => {
    e.stopPropagation();
    window.open(source_code_link, '_blank');
  };

  const handleViewSiteClick = (e) => {
    e.stopPropagation();
    window.open(source_deploy_link, '_blank');
  };

  const handleCardClick = () => {
    // Open the deployed link when clicking anywhere on the card
    window.open(source_deploy_link, '_blank');
  };

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="project-card" onClick={handleCardClick}>
        <div className="relative p-5 rounded-2xl border-2 border-gradient cursor-pointer">
          <div className="w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5 flex justify-between items-center">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex gap-4">
              <a
                onClick={handleViewCodeClick}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
                <span className="tooltip text-center">View code</span>
              </a>
              <a
                onClick={handleViewSiteClick}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative"
              >
                <img
                  src={netlify}
                  alt="deployed link"
                  className="w-1/2 h-1/2 object-contain"
                />
                <span className="tooltip text-center">View site</span>
              </a>
            </div>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Prop type validation
ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.shape({
    source_code: PropTypes.string.isRequired,
    source_deploy: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
