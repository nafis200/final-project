import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'http://localhost:5009'
})

const useAxiospublic = () => {
    return (
        axiosPublic
    );
};

export default useAxiospublic;