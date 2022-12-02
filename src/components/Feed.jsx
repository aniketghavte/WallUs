import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
 
import {client} from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [Loading, setLoading] = useState(false);
  const [Pins, setPins] = useState(null)
  const { categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
   
    if(categoryId){
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      })
    }
  }, [categoryId])
  
  if(!Pins?.length) return <h2>No pins Available</h2>

  if(Loading) return <Spinner message="We are adding new ideas to your feed! "/>
  return (
    <div >
      {Pins && <MasonryLayout Pins={Pins}/>}
    </div>
  )
}

export default Feed