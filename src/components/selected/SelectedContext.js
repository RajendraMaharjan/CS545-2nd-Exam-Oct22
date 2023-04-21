import React, { useContext } from 'react';
import { SelectedStudents } from '../../ThemeColor';
import ChosenStud from './ChosenStud';

function SelectedContext() {

    const { selectedStudents } = useContext(SelectedStudents);

    const selectedListFromContext = selectedStudents.map(sId => {
        return <ChosenStud id={sId} key={sId} />;
    });
    return (
        <div>
            <center><h1>{selectedStudents.length === 0 ? "No students selected." : "Selected Students"}</h1> </center>
            {selectedListFromContext}
        </div>
    );

}

export default SelectedContext;