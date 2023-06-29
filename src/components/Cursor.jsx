import React, { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = { x: undefined, y: undefined };
    let spots = [];
    let hue = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      for (let i = 0; i < 3; i++) {
        spots.push(new Particle());
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function Particle() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 5 + 0.1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = "hsl(" + hue + ", 100%, 50%";
    }

    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.1) this.size -= 0.03;
    };

    Particle.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    };

    function handleParticles() {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();

        for (let j = i; j < spots.length; j++) {
          const dx = spots[i].x - spots[j].x;
          const dy = spots[i].y - spots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.strokeStyle = spots[i].color;
            ctx.lineWidth = spots[i].size / 10;
            ctx.moveTo(spots[i].x, spots[i].y);
            ctx.lineTo(spots[i].x, spots[i].y);
            ctx.stroke();
          }
        }
        if (spots[i].size <= 0.3) {
          spots.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue++;
      requestAnimationFrame(animate);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 0,
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default CanvasBackground;
// import React, { useEffect, useRef } from "react";

// export const CanvasBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const mouse = { x: undefined, y: undefined };
//     let spots = [];
//     let hue = 0;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     canvas.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);

//     function handleMouseMove(event) {
//       mouse.x = event.x;
//       mouse.y = event.y;
//       for (let i = 0; i < 3; i++) {
//         spots.push(new Particle());
//       }
//     }

//     function handleResize() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       init();
//     }

//     class Particle {
//       constructor() {
//         this.x = mouse.x;
//         this.y = mouse.y;
//         this.size = Math.random() * 5 + 0.1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//         this.color = "hsl(" + hue + ", 100%, 50%";
//       }
//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if (this.size > 0.1) this.size -= 0.03;
//       }
//       draw() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     function handleParticle() {
//       for (let i = 0; i < spots.length; i++) {
//         spots[i].update();
//         spots[i].draw();

//         for (let j = i; j < spots.length; j++) {
//           const dx = spots[i].x - spots[j].x;
//           const dy = spots[i].y - spots[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 90) {
//             ctx.beginPath();
//             ctx.strokeStyle = spots[i].color;
//             ctx.lineWidth = spots[i].size / 10;
//             ctx.moveTo(spots[i].x, spots[i].y);
//             ctx.lineTo(spots[i].x, spots[i].y);
//             ctx.stroke();
//           }
//         }
//         if (spots[i].size <= 0.3) {
//           spots.splice(i, 1);
//           i--;
//         }
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       handleParticle();
//       hue++;
//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const canvasStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//   };

//   return <canvas ref={canvasRef} style={canvasStyle} />;
// };
