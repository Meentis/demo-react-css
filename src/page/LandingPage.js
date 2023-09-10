import { useNavigate } from "react-router-dom";
import yam from "../assets/images/yam.png";
function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details")
    };
    return (
        <div className="text-center font-mono">
            <p className="text-2xl font-bold uppercase text-white">About Me</p>
            <div className="flex justify-center">
                <img
                    src={yam}
                    alt="yam"
                    className="w-[20%] my-3 rounded-full p-6" />
            </div>
            <p className="text-md mt-2 font-bold text-white mx-36">
                The Fool Pathway seems to be about fooling perceptions and reality.
                They specialize in divination, illusions, changing appearances,
                strong muscle and facial expression control,
                and controlling other people as marionettes with spirit body threads.{"\n"}

                At High Sequences, they can turn their marionettes into another duplicate of themselves,
                bring things (including themselves) from the past to the present,
                create countless miracles, create a mysterious environment that's full of tampering and concealment,
                and are able to fool all sorts of things. Their authority represents Secrets and Changes.
            </p>
            <br />
            <button className="text-white underline" onClick={() => handleToDetail()}>NEXT</button>
        </div>
    );

}

export default LandingPage;