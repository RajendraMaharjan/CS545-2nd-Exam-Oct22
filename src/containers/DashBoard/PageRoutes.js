import { Route, Routes, Navigate } from "react-router";
import Students from "../../components/Student/Students";
import StudentDetails from "../../components/Student/StudentDetails";
import AddStudent from "../../components/AddStudent/AddStudent";
import SelectedContext from "../../components/selected/SelectedContext";

export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path='/students' element={<Students />} />
            <Route path='/students/:id' element={<StudentDetails />} />
            <Route path='/add-student' element={<AddStudent />} />
            <Route path="/selected-students" element={<SelectedContext />} />
            <Route path="/hello" element={<Navigate replace to="/selected-students" />} />
        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


