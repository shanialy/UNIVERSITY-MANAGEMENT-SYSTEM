import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const ShowAllStudentAttendanceTable = () => {

    // * ==== get user state 
    const adminLogin = useSelector((state) => state.adminLogin)
    const { error, userInfo, message } = adminLogin;

    const [attendances, setAttendances] = useState([])
    const [loading, setLoading] = useState(true)

    // * ========================

    // * Get ALl Attendance of this teacher
    const getAllStudentAttendance = async (year, semester) => {

        try {
            const data = await axios.get(
                `http://localhost:5000/api/students_attendance/${userInfo._id}`,
            )
            setAttendances(data.data.response)
            setLoading(false)
        } catch (error) {
            // alert(error)
        }
    }

    useEffect(() => {
        getAllStudentAttendance();
    }, [])

    return (
        <div className="table-container">
            {/* <Link className="add-btn" to="/admin/add-student">COURSES</Link> */}

            {loading ?
                <>
                    Loading ....
                </> :
                <>
                    <table>
                        <tr>
                            <th>Teacher Name</th>
                            <th>Student name</th>
                            <th>No of classes</th>
                            <th>Date</th>
                        </tr>
                        {attendances.map((attendance, key) => {
                            return (
                                <tr key={key}>
                                    <td>{attendance.attendance_teacher.teacher_first_name}</td>
                                    <td>{attendance.attendance_student.student_first_name}</td>
                                    <td>{attendance.attendance_no_of_classes}</td>
                                    <td>{attendance.createdAt}</td>
                                </tr>
                            )
                        })}
                    </table>
                </>
            }

        </div>
    )
}

export default ShowAllStudentAttendanceTable
