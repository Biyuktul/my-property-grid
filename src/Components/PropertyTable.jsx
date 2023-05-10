import { Table, Typography, Select } from 'antd';
import { useState } from 'react';
import './style.css'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

const { Title } = Typography;
const {Option} = Select;

function PropertyTable({title, data}) {
  const [expanded, setExpanded] = useState(true);



  const columns = [
    {
      title: '',
      dataIndex: 'property',
      key: 'property',
      width: '50%',
    },
    {
      title: '',
      dataIndex: 'value',
      key: 'value',
      width: '50%',
      className: 'no-border-select',
      render: (value, record) => (
        <Select suffixIcon={null} defaultValue={value} onChange={(selectedValue) => {
          record.value = selectedValue;
        }}>
          <Option value="value one">value one</Option>
          <Option value="value two">value two</Option>
          <Option value="value three">value three</Option>
          <Option value="value four">value four</Option>
          <Option value="value five">value five</Option>
        </Select>
      )
    },

  ];

  

  return (
    <div style={{ backgroundColor: '#F3F4F6' }}>  
      <div className="flex items-center mb-2 justify-between">
        <Title level={5} className="flex justify-between ml-5 h-4">{title}</Title>
        {expanded ? (
          <ChevronUpIcon className="h-5 w-5 cursor-pointer mr-5 text-gray-400" onClick={() => setExpanded(false)} />
        ) : (
          <ChevronDownIcon className="h-5 w-5 cursor-pointer mr-5 text-gray-400" onClick={() => setExpanded(true)} />
        )}
        
      </div>
      <div style={{ display: expanded ? 'block' : 'none'}}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{borderBottom: '1px solid black'}}      
        />
      </div>
    </div>
  );
}

export default PropertyTable;
