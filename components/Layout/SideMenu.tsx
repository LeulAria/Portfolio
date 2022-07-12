import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


const SideBarList: React.FC<{ data: any[] }> = ({ data }) => (
  <>
    {data.map((item, i) => (
      <div key={i}>{item.name}</div>
    ))}
  </>
);

export const SideMenu: React.FC<{
  overlayColor?: string;
  width?: number;
  data: any[];
}> = ({ overlayColor = "transparent", width = 200, data }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const constrols = useAnimation();

  useEffect(() => {
    constrols.start(isActive ? "active" : "inactive");
  }, [isActive, constrols]);

  const sidekickBodyStyles = {
    active: {
      x: 0
    },
    inactive: {
      x: -width
    }
  };

  const menuHandlerStyles = {
    active: {
      x: 0,
      color: "#000"
    },
    inactive: {
      x: 60,
      color: "#fff"
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[100000000]">
      <div className="absolute top-0 left-0 w-full h-full bg-blac/50" />

      <div
        className="relative z-1 bg-white p-10 h-full w-[400px"
        width={width}
        drag="x"
        dragElastic={0.1}
        dragConstraints={{
          left: -width,
          right: 0
        }}
        dragMomentum={false}
        onDragEnd={(_event, info) => {
          const isDraggingLeft = info.offset.x < 0;
          const multiplier = isDraggingLeft ? 1 / 4 : 2 / 3;
          const threshold = width * multiplier;

          if (Math.abs(info.point.x) > threshold && isActive) {
            setIsActive(false);
          } else if (Math.abs(info.point.x) < threshold && !isActive) {
            setIsActive(true);
          } else {
            constrols.start(isActive ? "active" : "inactive");
          }
        }}
        animate={constrols}
        variants={sidekickBodyStyles}
        transition={{ type: "spring", damping: 60, stiffness: 180 }}
      >
        <motion.div
          className="text-black absolute top-0 left-0 z-[99999]"
          onTap={() => setIsActive(s => !s)}
          variants={menuHandlerStyles}
          transition={{ type: "spring", damping: 60, stiffness: 180 }}
        >
          {isActive ? "Close" : "Open"}
        </motion.div>
        <SideBarList data={data} />
      </div>
    </div>
  );
};

export default SideMenu;