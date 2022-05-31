import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFuel } from 'features/summary/summarySlice';

import Input from 'components/Input';

import { Label } from './FuelForms.styles';

const Index = () => {
  const [fuelUsage, setFuelUsage] = useState<number | null>(null);
  const [fuelPrice, setFuelPrice] = useState<number | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fuelPrice && fuelUsage) {
      dispatch(setFuel({ fuelPrice, fuelUsage }));
    }
  }, [fuelUsage, fuelPrice, dispatch]);

  return (
    <div>
      <div className="inputWrapper">
        <Label htmlFor="fuelUsage">Fuel usage for 100km</Label>
        <Input
          aria-label="fuelUsage"
          value={fuelUsage ? fuelUsage : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFuelUsage(Number(e.target.value))
          }
          id="fuelUsage"
          type="number"
          name="fuelUsage"
        />
      </div>
      <div className="inputWrapper">
        <Label htmlFor="fuelPrice">Fuel price (for 1 liter)</Label>
        <Input
          aria-label="fuelPrice"
          value={fuelPrice ? fuelPrice : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFuelPrice(Number(e.target.value))
          }
          name="fuelPrice"
          id="fuelPrice"
          type="number"
        />
      </div>
    </div>
  );
};

export default Index;