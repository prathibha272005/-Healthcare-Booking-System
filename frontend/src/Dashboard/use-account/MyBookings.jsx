import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from "./../../components/Doctor/DoctorCard"
import Loading from "../../Loader/Loading"
import Error from "../../Error/Error"

const MyBookings = () => {
    const {
        data: appointments,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

    return (
        <div>
            {loading && !error && <Loading />}

            {error && !loading && <Error errMessage={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {appointments.map(doctor => (
                        <DoctorCard doctor={doctor} key={doctor._id} />
                    ))}
                </div>
            )}

            {!loading && !error && appointments.length === 0 && (
                <h2 className="mt-5 leading-7 text-[20px] font-semibold text-primaryColor">
                    You did not book ay doctor yet
                </h2>
            )}
        </div>
    );
};

export default MyBookings
