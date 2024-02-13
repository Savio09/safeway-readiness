import "./App.css";
import Home from "./components/Home";
import FamilyComponent from "./components/FamilyComponent";
import Resources from "./components/Resources";
import DisasterTracker from "./components/DisasterTracker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fire from "./components/disasters/Fire";
import Navbar from "./components/Navbar";
import Tornado from "./components/disasters/Tornado";
import Flood from "./components/disasters/Flood";
import Earth from "./components/disasters/Earth";
import EarthQuakeGuide from "./components/guides/earthQuakeGuide";
import SafeRoutes from "./components/safeway/safeRoutes";
import soon from "./images/coming_soon.svg";
// import Guide from "./components/Guide";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="familyComponent" element={<FamilyComponent />}></Route>
          <Route path="resourcesComponent" element={<Resources />}></Route>
          <Route path="safeRoutes" element={<SafeRoutes />}></Route>
          <Route path="disasterTracker" element={<DisasterTracker />}>
            <Route path="fire" element={<Fire />} />
            <Route path="tornado" element={<Tornado />} />
            <Route path="flood" element={<Flood />} />
            <Route path="earth" element={<Earth />} />
          </Route>
          <Route
            path="/resourcesComponent/earthGuide"
            element={
              <EarthQuakeGuide
                name="EarthQuake Guide (Seismic)"
                title_1="Drop. Cover. Hold on."
                content_1="In most situations, you can protect yourself if you immediately:

                DROP down onto your hands and knees before the earthquake knocks you down. This position protects you from falling but allows you to still move if necessary.
                COVER your head and neck (and your entire body if possible) underneath a sturdy table or desk. If there is no shelter nearby, get down near an interior wall or next to low-lying furniture that won’t fall on you, and cover your head and neck with your arms and hands.
                HOLD ON to your shelter (or to your head and neck) until the shaking stops. Be prepared to move with your shelter if the shaking shifts it around."
                title_2="If you are inside, stay inside."
                content_2="DO NOT run outside or to other rooms during an earthquake. You are less likely to be injured if you stay where you are.

                To reduce your chances of being hurt, take the following actions:
                
                If possible, within the few seconds before shaking intensifies, quickly move away from glass, hanging objects, bookcases, china cabinets, or other large furniture that could fall. Watch for falling objects, such as bricks from fireplaces and chimneys, light fixtures, wall hangings, high shelves, and cabinets with doors that could swing open.
                If available nearby, grab something to shield your head and face from falling debris and broken glass.
                If you are in the kitchen, quickly turn off the stove and take cover at the first sign of shaking.
                If you are in bed, hold on and stay there, protecting your head with a pillow. You are less likely to be injured staying where you are. Broken glass on the floor can cause injuries if you walk or roll onto the floor."
                title_3="If you are in a high-rise building, drop, cover, and hold on."
                content_3="Move away from windows and outside walls.
                Stay in the building.
                DO NOT use the elevators. The electricity may go out, and the sprinkler systems may come on.
                If you are trapped, stay calm. Try to get someone’s attention by tapping on hard or metal parts of the structure. Doing so may increase your chances of being rescued."
                title_4="If you are inside a crowded place, drop, cover, and hold on."
                content_4="Do not rush for the doorways. Others will have the same idea.
                Move away from display shelves containing objects that may fall.
                If you can, take cover and grab something to shield your head and face from falling debris and glass."
                title_5="If you are outside, stay outside."
                content_5="Move away from buildings, utility wires, sinkholes, and fuel and gas lines. The greatest danger from falling debris is just outside doorways and close to outer walls of buildings.
                Go to an open area away from trees, telephone poles, and buildings. Once in the open, get down low and stay there until the shaking stops.
                The area near the outside walls of a building is the most dangerous place to be. Windows, facades, and architectural details are often the first parts of the building to collapse. Stay away from this danger zone."
                title_6="If you are in a moving vehicle, stop as quickly and safely as possible."
                content_6="Move your car to the shoulder or curb, away from utility poles, overhead wires, and under- or overpasses.
                Stay in the car and set the parking brake. A car may jiggle violently on its springs, but it is a good place to stay until the shaking stops.
                Turn on the radio for emergency broadcast information.
                If a power line falls on the car, stay inside until a trained person removes the wire.
                When it is safe to begin driving again, watch for hazards created by the earthquake, such as breaks in the pavement, downed utility poles and wires, rising water levels, fallen overpasses, or collapsed bridges.
                "
                title_7="If you are in a stadium or theater, stay in your seat. Protect your head and neck with your arms or any way possible."
                content_7="Do not leave until the shaking is over.
                Walk out carefully watching for anything that could fall during the aftershocks."
                title_8="If you are near the shore, drop, cover, and hold on until the shaking stops."
                content_8="If severe shaking lasts 20 seconds or more, immediately evacuate to high ground as a tsunami might have been generated by the earthquake.
                Move inland 2 miles (3 kilometers) or to land that is at least 100 feet (30 meters) above sea level immediately. Don’t wait for officials to issue a warning.
                Walk quickly, rather than drive, to avoid traffic, debris, and other hazards."
                title_9="If you cannot drop to the ground, try to sit or remain seated so you are not knocked down.
                "
                content_9="If you are in a wheelchair, lock your wheels. Remove any items that are not securely attached to the wheelchair.
                Protect your head and neck with a large book, a pillow, or your arms. The goal is to prevent injuries from falling down or from objects that might fall or be thrown at you.
                If you are able, seek shelter under a sturdy table or desk. Stay away from outer walls, windows, fireplaces, and hanging objects.
                If you are unable to move from a bed or chair, protect yourself from falling objects by covering up with blankets and pillows.
                If you are outside, go to an open area away from trees, telephone poles, and buildings, and stay there.
                For more resources for people with impaired mobility and other access and functional needs, visit the Earthquake Country Alliance external icon."
                iconName="language"
              />
            }
          ></Route>
          <Route
            path="/resourcesComponent/fireGuide"
            element={
              <EarthQuakeGuide
                name="Fire Guide (Seismic)"
                iconName="local_fire_department"
                title_1="Protect yourself from smoke."
                content_1="When wildfires create smoky conditions it’s important for everyone to reduce their exposure to smoke
                . Wildfire smoke irritates your eyes, nose, throat, and lungs. It can make it hard to breathe and make you cough or wheeze. Children
                 and people with asthma, COPD, heart disease, or who are pregnant need to be especially careful about breathing wildfire smoke.
                
                Keep smoke outside.
                Choose a room you can close off from outside air.
                Set up a portable air cleaner or a filter
                 to keep the air in this room clean even when it’s smoky in the rest of the building and outdoors. If you use a do-it-yourself box fan filtration unit, never leave it unattended.
                Reduce your smoke exposure by wearing a respirator 
                .
                A respirator is a mask that fits tightly to your face to filter out smoke before you breathe it in.
                You must wear the right respirator and wear it correctly 
                . Children ages 2 years and older can wear respirators and masks. However, NIOSH Approved respirators do not come in suitable sizes for very young children.
                If you have heart or lung disease ask your doctor if it is safe for you to wear a respirator.
                Avoid using candles, gas, propane, wood-burning stoves, fireplaces, or aerosol sprays and don’t fry or broil meat, smoke tobacco products, or vacuum.
                If you have a central air conditioning system, use high efficiency filters to capture fine particles from smoke. If your system has a fresh air intake, set the system to recirculate mode or close the outdoor intake damper.
                Pets and other animals can be affected by wildfire smoke too.
                Learn how to protect pets
                 and livestock
                .
                Some evacuation centers do not accept animals. Check Petfinder’s Shelter Center
                 or RedRover
                 for information on local animal shelters and rescue groups
                Keep track of fires near you so you can be ready.
                AirNow’s “Fire and Smoke Map
                ” has a map of fires throughout North America.
                NOAA’s “Fire weather outlook
                ” page maps fire watches and warnings.
                Listen to the Emergency Alert System (EAS) and National Oceanic and Atmospheric Administration (NOAA) Weather Radio for emergency alerts.
                "
                title_2="Evacuate Safely"
                content_2="You may be asked by public authorities to evacuate or you may decide to evacuate. Read about how to evacuate safely and how to develop a family disaster plan, including:

                Finding out what could happen to you
                Making a disaster plan
                Completing the checklist
                Practicing your plan"
                title_3="Stay healthy during power outages."
                content_3="Large fires can cause long-term power outages. Read about what to do if your power goes out, including:

                Preventing carbon monoxide poisoning
                Food safety
                Safe drinking water
                Power line hazards"
              />
            }
          ></Route>
          <Route
            path="/resourcesComponent/floodGuide"
            element={
              <EarthQuakeGuide
                name="Flood Guide"
                iconName="water_drop"
                content_1={
                  <div className="soon">
                    <img src={soon} alt="" />
                    <h1>There is nothing here...</h1>
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/resourcesComponent/tornadoGuide"
            element={
              <EarthQuakeGuide
                name="Tornado Guide"
                iconName="air"
                content_1={
                  <div className="soon">
                    <img src={soon} alt="" />
                    <h1>There is nothing here...</h1>
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/resourcesComponent/hurricaneGuide"
            element={
              <EarthQuakeGuide
                name="Hurricane Guide"
                iconName="air"
                content_1={
                  <div className="soon">
                    <img src={soon} alt="" />
                    <h1>There is nothing here...</h1>
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/resourcesComponent/blizzardGuide"
            element={
              <EarthQuakeGuide
                name="Hurricane Guide"
                iconName="ac_unit"
                content_1={
                  <div className="soon">
                    <img src={soon} alt="" />
                    <h1>There is nothing here...</h1>
                  </div>
                }
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
