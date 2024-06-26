import { useEffect, useState } from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import AircraftCard from "../AircraftCard/AircraftCard"
import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL

const AircraftsList = () => {

    const [aircrafts, setAircrafts] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        loadAircrafts()
    }, [])


    const loadAircrafts = () => {
        axios
            .get(`${API_URL}/aircrafts`)
            .then(({ data }) => {
                setAircrafts(data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="AircraftsList">
            {
                isLoading
                    ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Row>
                        {aircrafts.map(aircraft => {

                            return (
                                <Col md={{ span: 6 }} className="mb-5" key={aircraft.id}>

                                    <AircraftCard {...aircraft} />

                                </Col>
                            )
                        })
                        }
                    </Row>
            }
        </div>
    )
}

export default AircraftsList