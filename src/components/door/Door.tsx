import { motion } from 'framer-motion';
import './styles/style.css';

interface DoorProps {
  position?: string;
  className?: 'door-right' | 'door-left' | undefined;
}

export const Door: React.FC<DoorProps> = ({ position, className }) => {
  return (
    <motion.div className={`door ${className}`}>
      <div className='door-washi'></div>
      <div className='door-bottom'></div>
    </motion.div>
  );
};
