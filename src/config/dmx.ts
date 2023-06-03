import { DMX, ArtnetDriver}  from "dmx-ts";

interface FixtureController {
    setDim(): void;
    setColor(r: number, g: number, b: number): void;
    setPan(value: number): void;
    setTilt(value: number): void;
}


class mainController implements FixtureController {
    constructor() {
    
    }
  
    setDim(): void {
    
    }
  
    setColor(r: number, g: number, b: number): void {
    
    }
  
    setPan(value: number): void {
    
    }
  
    setTilt(value: number): void {
    
    }
}


export default mainController