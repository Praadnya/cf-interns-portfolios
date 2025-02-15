export default function Addn_details(){
    return (
        <div className="grid grid-cols-3 gap-6 w-2/3">
                    
                    {/* 🏆 Awards */}
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-rose-400">
                        <h1 className="text-2xl font-bold mb-4 text-rose-400">🏆 Awards</h1>
                        <ul className="text-gray-300 list-disc list-inside">
                            <li>🥇 1st place in Ingenius 11 (Hackathon)</li>
                            <li>📜 Research Paper at IEEE 9th Conference</li>
                            <li>🏆 Top 70 in Myntra Hackathon</li>
                            
                        </ul>
                    </div>

                    {/* 🌎 Languages */}
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                        <h1 className="text-2xl font-bold mb-4 text-yellow-400">🌎 Languages</h1>
                        <ul className="text-gray-300 list-disc list-inside">
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Kannada</li>
                            <li>Tamil</li>
                        </ul>
                    </div>

                    {/* 🎭 Hobbies */}
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-green-400">
                        <h1 className="text-2xl font-bold mb-4 text-green-400">🎭 Hobbies</h1>
                        <ul className="text-gray-300 list-disc list-inside">
                            <li>🏸 Playing Badminton</li>
                            <li>🧘 Yoga</li>
                            <li>🚀 Exploring New Things</li>
                        </ul>
                    </div>
                </div>
    )
}