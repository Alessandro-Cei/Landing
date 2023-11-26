import { useState, useEffect } from 'react';
import './PillsGrid.css';
import PillsRow from './subcomponents/PillsRow';

export default function PillsGrid() {
    
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 576;

    return(
        <div className='pills__container'>            
            <PillsRow speed={"230s"} direction={"Left"} technologies={
                ["Foundation", "Notifications", "HomeKit", "Prototyping", "Widgets", 
                "UIKit", "SpriteKit", "DocC", "SwiftUI", "Task management", 
                "GeometryReader", "Responsive Layouts", "WatchOS", "TestFlight", 
                "PDFKit", "GameKit", "Multiplatform App", "File Manager", "Scrum", 
                "CoreData", "Concurrency", "WebKit", "CloudKit", "DynamicView", 
                "Voice Over", "AVKit", "Accessibility", "Native Gesture", "CoreHaptics", 
                "AppStore Connect", "Animations", "iPadOS", "Native Components", 
                "Agile Methodology", "Design Patterns", "UserDefaults", "Usability Testing", 
                "MapKit", "MacOS", "Wallet", "APIs", "Git"]
            }/>
            {
                isMobile == false ? 
                <>
                    <PillsRow speed={"200s"} direction={"Right"} technologies={
                        ["UIKit", "Widgets", "Concurrency", "DocC", "CoreData", "Accessibility", 
                        "Animations", "SpriteKit", "GameKit", "PDFKit", "Voice Over", "Usability Testing", 
                        "CloudKit", "Foundation", "Task management", "Responsive Layouts", "GeometryReader", 
                        "Scrum", "AVKit", "Design Patterns", "Agile Methodology", "AppStore Connect", "WebKit", 
                        "CoreHaptics", "MacOS", "HomeKit", "Git", "WatchOS", "Multiplatform App", "Notifications", 
                        "DynamicView", "SwiftUI", "Wallet", "iPadOS", "Prototyping", "MapKit", "UserDefaults", "APIs", 
                        "Native Gesture", "File Manager", "TestFlight", "Native Components"]
                    }/>
                    <PillsRow speed={"215s"} direction={"Left"} technologies={
                        ["CoreData", "UIKit", "Voice Over", "MapKit", "Concurrency", "Design Patterns", 
                        "Agile Methodology", "PDFKit", "SwiftUI", "CoreHaptics", "Scrum", "WatchOS",
                        "Widgets", "Accessibility", "Responsive Layouts", "GameKit", "Git", "AVKit", 
                        "TestFlight", "AppStore Connect", "MacOS", "Wallet", "DocC", "CloudKit", "HomeKit", 
                        "Task management", "iPadOS", "Multiplatform App", "Usability Testing", "Animations", 
                        "WebKit", "Native Gesture", "Prototyping", "Foundation", "Native Components", 
                        "Notifications", "GeometryReader", "SpriteKit", "DynamicView", "File Manager", "UserDefaults", "APIs"]
                    }/>
                </>
                : null
            }
            <PillsRow speed={"220s"} direction={"Right"} technologies={
                ["Native Gesture", "UIKit", "PDFKit", "HomeKit", "CoreData", "Voice Over", 
                "Git", "Prototyping", "Foundation", "GeometryReader", "Accessibility", "File Manager", 
                "SpriteKit", "Widgets", "Responsive Layouts", "AVKit", "MacOS", "Design Patterns", 
                "SwiftUI", "TestFlight", "Agile Methodology", "Concurrency", "DynamicView", 
                "AppStore Connect", "Usability Testing", "Animations", "MapKit", "Task management", 
                "CloudKit", "WatchOS", "Multiplatform App", "Scrum", "Notifications", "CoreHaptics", 
                "WebKit", "DocC", "GameKit", "APIs", "UserDefaults", "Native Components", "Wallet", "iPadOS"]
            }/>
        </div>        
    )

}
