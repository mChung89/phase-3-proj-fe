import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

function FilteredListings () {
    let params = useParams()
    const [climateListing, setClimateListing] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/listings/${params.climate}`)
          .then(res => res.json())
          .then(setClimateListing)
      }, [])
    console.log(climateListing)

    return <h2>Hello World</h2>

}

export default FilteredListings