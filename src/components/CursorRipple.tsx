import { useEffect, useState } from 'react'

interface Splash {
    id: number
    x: number
    y: number
}

const CursorRipple = () => {
    const [splashes, setSplashes] = useState<Splash[]>([])
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let splashId = 0

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }

        const handleClick = (e: MouseEvent) => {
            const newSplash: Splash = {
                id: splashId++,
                x: e.clientX,
                y: e.clientY,
            }

            setSplashes((prev) => [...prev, newSplash])

            // Remove splash after animation completes
            setTimeout(() => {
                setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id))
            }, 800)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <>
            {/* Glowing cursor circle - only visible in dark mode */}
            <div
                className="fixed pointer-events-none z-50 hidden dark:block transition-opacity duration-200"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className="w-8 h-8 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)',
                        boxShadow: '0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)',
                    }}
                ></div>
            </div>

            {/* Water splash effects on click */}
            <div className="fixed inset-0 pointer-events-none z-40">
                {splashes.map((splash) => (
                    <div
                        key={splash.id}
                        className="absolute"
                        style={{
                            left: splash.x,
                            top: splash.y,
                        }}
                    >
                        {/* Main splash circle */}
                        <div className="absolute animate-splash-ring" style={{
                            width: '40px',
                            height: '40px',
                            marginLeft: '-20px',
                            marginTop: '-20px',
                            border: '3px solid rgba(96, 165, 250, 0.8)',
                            borderRadius: '50%',
                        }}></div>

                        {/* Splash droplets */}
                        {[...Array(8)].map((_, i) => {
                            const angle = (i * 360) / 8
                            return (
                                <div
                                    key={i}
                                    className="absolute animate-splash-droplet"
                                    style={{
                                        width: '6px',
                                        height: '10px',
                                        marginLeft: '-3px',
                                        marginTop: '-5px',
                                        background: 'linear-gradient(to bottom, rgba(96, 165, 250, 0.8), rgba(96, 165, 250, 0.4))',
                                        borderRadius: '50% 50% 50% 0',
                                        transform: `rotate(${angle}deg)`,
                                        animationDelay: `${i * 0.05}s`,
                                    }}
                                ></div>
                            )
                        })}

                        {/* Center splash dot */}
                        <div className="absolute animate-splash-center" style={{
                            width: '8px',
                            height: '8px',
                            marginLeft: '-4px',
                            marginTop: '-4px',
                            background: 'radial-gradient(circle, rgba(96, 165, 250, 1), rgba(96, 165, 250, 0.5))',
                            borderRadius: '50%',
                        }}></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CursorRipple
