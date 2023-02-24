import { REMOVE_COURSE } from '../mutations';

import { useMutation } from '@apollo/client';

const useRemove = (): [ (id: string) => Promise<void> ] => {
  const [ removeCourse ] = useMutation(REMOVE_COURSE);

  const remove = async (id : string) => {
    
    await removeCourse({
      variables: {
        removeCourseId: id
      }
    })
  }
  
  return [ remove ];
};

export default useRemove;