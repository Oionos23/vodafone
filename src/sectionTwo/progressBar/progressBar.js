import React from "react";
import Filler from "./filler";
import "./progressBar.css";
//         return (
//             <div>
//                 <h2> A React Progress Bar </h2>

//                 <div style={{ marginTop: "20px" }}>
//                     <button onClick={this.nextStep}>Next Step</button>
//                 </div>

//                 <div
//                     style={{
//                         marginTop: "10px",
//                         color: "blue",
//                         marginBottom: "15px",
//                     }}
//                     onClick={() => this.setState({ percentage: 0 })}
//                 >
//                     Reset
//                 </div>
//             </div>
//         );
//     }
// }

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    );
};

export default ProgressBar;
