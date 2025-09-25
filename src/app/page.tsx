"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";



export default function Home() {

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/backdrop.svg')" }}
    >

      <div className="flex flex-row items-center justify-center space-x-2.5">

        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          onClick={() => audioRef.current?.play()}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Image src="/images/aboutme.svg" alt="About Me" width={250} height={200} />
          <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          onClick={() => audioRef.current?.play()}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Image src="/images/reviews.svg" alt="About Me" width={250} height={200} />
          <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          onClick={() => audioRef.current?.play()}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Image src="/images/blogs.svg" alt="About Me" width={250} height={200} />
          <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
        </motion.div>

      </div>

      <div className="flex">

        <div className="relative flex w-full h-[800px] ml-20">

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10"
            style={{ left: "0px", top: "0px" }}
          >
            <Image src="/images/director.svg" alt="Director" width={400} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-30"
            style={{ left: "-20px", top: "210px" }}
          >
            <Image src="/images/youtube.svg" alt="YouTube" width={200} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            
            className="absolute z-20"
            style={{ left: "10px", top: "80px" }}
          >
            <Image src="/images/pinkbow.svg" alt="Pink Bow" width={150} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            
            className="absolute z-40"
            style={{ left: "230px", top: "140px" }}
          >
            <Image src="/images/flower.svg" alt="Flower" width={250} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            
            className="absolute z-40"
            style={{ left: "230px", top: "140px" }}
          >
            <Image src="/images/flower.svg" alt="Flower" width={250} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            
            className="absolute z-10"
            style={{ left: "530px", top: "120px" }}
          >
            <Image src="/images/booksndew.svg" alt="Booksndew Logo" width={450} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10"
            style={{ left: "530px", top: "320px" }}
          >
            <Image src="/images/camera.svg" alt="Camera" width={400} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-20"
            style={{ left: "500px", top: "490px" }}
          >
            <Image src="/images/instagram.svg" alt="Instagram" width={250} height={250} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-20"
            style={{ right: "500px", top: "490px" }}
          >
            <Image src="/images/substack.svg" alt="Substack" width={250} height={250} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10"
            style={{ right: "530px", top: "320px" }}
          >
            <Image src="/images/envelope.svg" alt="Envelope" width={500} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-20"
            style={{ right: "100px", top: "90px" }}
          >
            <Image src="/images/goodreads.svg" alt="Goodreads" width={250} height={250} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => audioRef.current?.play()}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10"
            style={{ right: "130px", top: "x20px" }}
          >
            <Image src="/images/sudoku.svg" alt="Sudoku" width={500} height={200} />
            <audio ref={audioRef} src="/audio/click.wav" preload="auto" />
          </motion.div>

        </div>

        
      </div>

    </div>
  );
}
