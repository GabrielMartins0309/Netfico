import { collection, getDocs } from "firebase/firestore";
import { db } from "../../App.js";

const LoadMovies = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "Movies"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Erro ao carregar filmes:", error);
    }
};

export default LoadMovies;
