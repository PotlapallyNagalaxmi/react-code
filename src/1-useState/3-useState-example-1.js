import React,{useState} from "react";

const Index = () =>{

    const [showData, setShowData] = useState(false);

    const handleChanged =() =>{
        setShowData(!showData);
    };

    return (
        <div>
        <button onClick={handleChanged}>{showData ? "hide" : "show"}</button>
          {
            // showData && (
            
        //     <div className="content">
        //       lasoashdnf cjlkscgbisjkn cnlkasdcnkjb cnmksckanc;lsmiksjmkl,nfiushkjsndkjsishdbSDYHstgdukwndkjYDOWJDWD
        //     </div>
        //  )

         }
         {
            showData ? <div>lasoashdnf cjlkscgbisjkn cnlkasdcnkjb cnmksckanc;lsmiksjmkl,nfiushkjsndkjsishdbSDYHstgdukwndkjYDOWJDWD</div> : <h3>  data is hidden</h3>
         }
        </div>
        );
};

export default Index;