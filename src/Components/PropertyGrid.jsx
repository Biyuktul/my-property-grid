import React from 'react'
import HorizontalMenu from './HorizintalMenu'
import PropertyTable from './PropertyTable'
const data1 = [
  {
    key: '1',
    property: 'property one',
    value: 'value one',
  },
  {
    key: '2',
    property: 'property two',
    value: 'value two',
  },
  {
    key: '3',
    property: 'property three',
    value: 'value three',
  },
  {
      key: '4',
      property: 'property four',
      value: 'value four',
    },
    {
      key: '5',
      property: 'property five',
      value: 'value five',
    },
];
const data2 = [
  {
    key: '1',
    property: 'property one',
    value: 'value one',
  },
  {
    key: '2',
    property: 'property two',
    value: 'value two',
  },
  {
    key: '3',
    property: 'property three',
    value: 'value three',
  },
  
];
const data3 = [
  {
    key: '1',
    property: 'property one',
    value: 'value one',
  },
];
const data4 = [
  {
    key: '1',
    property: 'property one',
    value: 'value one',
  },
  {
    key: '2',
    property: 'property two',
    value: 'value two',
  },
  {
    key: '3',
    property: 'property three',
    value: 'value three',
  },
  {
      key: '4',
      property: 'property four',
      value: 'value four',
    },
    {
      key: '5',
      property: 'property five',
      value: 'value five',
    },
    {
      key: '6',
      property: 'property four',
      value: 'value six',
    },
    {
      key: '7',
      property: 'property five',
      value: 'value seven',
    },
];
const PropertyGrid = () => {
  return (
    <div className="w-[97%] h-[95%]">
      <HorizontalMenu />
      <div style={{ height: '645px', border: '1px solid gray', overflowY: 'scroll'}} className="w-[100%]">
        <PropertyTable data={data1} title={"Property Table 1"}/>
        <PropertyTable data={data2} title={"Property Table 2"}/>
        <PropertyTable data={data3} title={"Property Table 3"}/>
        <PropertyTable data={data1} title={"Property Table 4"}/>
        <PropertyTable data={data4} title={"Property Table 5"}/>
        <PropertyTable data={data1} title={"Property Table 6"}/>
      </div>
    </div>
  )
}

export default PropertyGrid
