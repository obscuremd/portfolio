import Hero from './components/Hero';
import StacksRow from './components/stacks/StacksRow';
import './App.css'

function App() {
  return (
    <div className='min-h-screen max-w-screen bg-[#121422] text-[#A98F76]' >
      <div className='w-full px-4 py-8 md:px-32 md:py-20 flex flex-col gap-1'>
        <Hero />
        <StacksRow />
      </div>
    </div>
  );
}

export default App;
