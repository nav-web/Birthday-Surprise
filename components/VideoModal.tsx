import { FC } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

interface VideoModalProps { onClose: () => void }

const VideoModal: FC<VideoModalProps> = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-md w-full"
      initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
    >
      <div className="relative pb-[100%]">
        <ReactPlayer
          url="/videos/capyBirthday.mp4"
          playing
          controls={false}
          width="100%"
          height="100%"
          loop
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <button
        onClick={onClose}
        className="w-full py-3 bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default VideoModal;