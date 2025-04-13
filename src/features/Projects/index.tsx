import Container from '@/components/ui/container'
import React from 'react'
import { GET_PROJECTS } from './server/action'

const Index = async () => { 
  const projects = await GET_PROJECTS()
  console.log(projects);
  
  return (
    <Container className='w-full h-60 bg-slate-600'>
        
    </Container>
  )
}

export default Index