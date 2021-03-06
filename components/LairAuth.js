import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { useSpeechSynthesis } from "react-speech-kit";
import { modalVariants } from '../utiils/Animations';
import { motion } from 'framer-motion';



const LairAuth = ({ setIsModal, isModal }) => {
    const modalRef = useRef();
    const router = useRouter();
    const [value, setValue] = useState('')
    const [toastValue, setToastValue] = useState('😈 hahahahahaha!')
    const { speak } = useSpeechSynthesis();
    const key = 'keys'


    // fisher-yates
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    var arr = ['Crazy!', 'Who is this peasant ..?', 'You must be joking!!', 'Interesting!', 'Unbelieveable!', 'You don"t have the guts!', 'What Audacity!', 'Person Wey don Mad ! 🤣', 'Na you go tire! 😂 '];
    var soundArr = ['troll.mp3', 'horror-new.mp3']
    shuffle(arr, soundArr);

    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })
    const handleClickOutside = (event) => {
        modalRef.current && !modalRef.current.contains(event.target) && setIsModal(false)
    };




    const verifyLair = (e) => {
        e.preventDefault();

        if (value.toString() !== key) {
            setToastValue(arr[0])
            // setSoundVal(new Audio('troll.mp3'))
            toast.error(toastValue, { autoClose: 2000 });
            console.log(toastValue);
            // soundVal?.play();
            var audio = new Audio('troll.mp3'); 
            audio.play();
            // speak({ text: toastValue })


        } else {
            // setSoundValClap(new Audio('troll.mp3'))
            setIsModal(!isModal)
            toast.success('Good One Lad', { autoClose: 2000 });
            // soundValClap?.play();
            var audio = new Audio('clap.mp3'); 
            audio.play();

            setTimeout(() => {
                router.push('/puzzle')
            }, 2000)
        }
    }


    return (
        // <AnimatePresence>
            isModal &&
                <div className="lair-auth-wrapper">
                    <div  className="absolute top-4 right-4 font-bold cursor-pointer text-2xl p-6 bg-black z-30">x</div>
                    <motion.form
                        onSubmit={(e) => verifyLair(e)}
                        className="lair-auth-content jungle"
                        variants={modalVariants}
                        initial="initial"
                        animate="final"
                        exit="exit"
                        ref={modalRef}
                    >
                        <h1 className='nosifer'>Enter secret keys of the Lair</h1>
                        <input required className="input-group nosifer" value={value} placeholder={'secret code'} type="text" onChange={(e) => setValue(e.target.value)} />
                        <button type="submit" className="submit-btn nosifer">submit</button>
                    </motion.form>
                </div>

        // </AnimatePresence>

    )
}

export default LairAuth;





