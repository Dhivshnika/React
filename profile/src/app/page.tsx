'use client'
import React, { useState, useEffect } from "react";
import { Image, Flex, Input, Radio, DatePicker, Button, Upload, Dropdown, Select } from "antd";
import { UserOutlined, TrophyOutlined, FileProtectOutlined, SlidersOutlined, ProductOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import moment from "moment";
import type { GetProp, UploadProps } from 'antd';
import { Menu, message } from 'antd';
import skills from "./Skills";


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const Home: React.FC = () => {
  const information = {
    name: "Alice Clara",
    dob: moment("23-12-2001", 'DD-MM-YYYY'),
    location: "India",
    mail: "alice@gmail.com",
    mobile: 9510080921,
    gender: "female",
    experience: 2,
    role: "React Developer",
    skill: "react",
    company: "Doodleblue",
    college: "Loyola Institution of Technology",
    cgpa: "8.3",
    stream: "Electronics and Communication Engineering",
    batch: 2023,
    image: "https://img.freepik.com/free-photo/alluring-young-african-american-female-with-dark-curly-hairstyle-smiling-determined-motivated-cross-arms-chest-confident-pose-smiling-daring-camera-white-wall_176420-35065.jpg",
  };
  const [details, setDetails] = useState<any>(information);
  const [name, setName] = useState<any>(details.name);
  const [gender, setGender] = useState<any>(details.gender);
  const [date, setDate] = useState<any>(details.dob);
  const [location, setLocation] = useState<any>(details.location);
  const [mail, setMail] = useState<any>(details.mail);
  const [mobile, setMobile] = useState<any>(details.mobile);
  const [experience, setExperience] = useState<any>(details.experience);
  const [role, setRole] = useState<any>(details.role);
  const [skill, setSkill] = useState<any>(details.skill);
  const [company, setCompany] = useState<any>(details.company);
  const [college, setCollege] = useState<any>(details.college);
  const [cgpa, setCgpa] = useState<any>(details.cgpa);
  const [stream, setStream] = useState<any>(details.stream);
  const [batch, setBatch] = useState<any>(details.batch);
  const [openPersonal, setOpenPersonal] = useState<boolean>(true);
  const [openExperience, setOpenExperience] = useState<boolean>(true);
  const [openEducation, setOpenEducation] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>(details.image);
  const [messageApi, contextHolder] = message.useMessage();
  const [countries, setCountries] = useState<any>([]);
  const batchItems = [];
  const yearItems = [];
  const { Option } = Select;

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Changes saved',
    });
  };


  for (let year = 2000; year <= 2024; year++) {
    batchItems.push({
      key: year.toString(),
      label: year.toString(),
    });
  }
  yearItems.push({
    key: "Fresher",
    label: "Fresher",
  });
  for (let year = 1; year <= 30; year++) {
    yearItems.push({
      key: year.toString(),
      label: year.toString(),
    });
  }

  const batchMenu = (
    <div style={{ maxHeight: '200px', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Menu>
        {batchItems.map(item => (
          <Menu.Item key={item.key} onClick={() => setBatch(item.key)}>{item.label}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
  const yearMenu = (
    <div style={{ maxHeight: '200px', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Menu>
        {yearItems.map(item => (
          <Menu.Item key={item.key} onClick={() => setExperience(item.key)}>{item.label}</Menu.Item>
        ))}
      </Menu>
    </div>
  );

  const handleSave = () => {
    setOpenPersonal(true);
    setOpenEducation(true);
    setOpenExperience(true);
    setDetails({
      name: name,
      dob: date,
      location: location,
      mail: mail,
      mobile: mobile,
      gender: gender,
      experience: experience,
      role: role,
      skill: skill,
      company: company,
      college: college,
      cgpa: cgpa,
      stream: stream,
      batch: batch,
      image: imageUrl,

    });
  }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2
        })));
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <Flex gap="large">
      <Flex vertical align="center" className="profileContent" gap="large" style={{ paddingTop: "20px" }}>
        <Upload
          name="avatar"
          showUploadList={false}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          onChange={handleChange}
        >
          {imageUrl && <img height={200} width={200} src={imageUrl} style={{ borderRadius: "100px" }} alt="pic" />}
        </Upload>
        <Flex vertical gap="large" className="menuItem">
          <Flex gap='small'><UserOutlined />My Profile</Flex>
          <Flex gap='small'><SlidersOutlined />Experience</Flex>
          <Flex gap='small'><TrophyOutlined />Education</Flex>
          <Flex gap='small'><FileProtectOutlined />Projects</Flex>
          <Flex gap='small'><ProductOutlined />Languages</Flex>
        </Flex>
      </Flex>
      <Flex vertical className="profileEditContainer">
        <h2>Profile Edit</h2>
        <Flex vertical className="profileEdit" gap="large">
          <Flex gap="small"><EditOutlined onClick={() => setOpenPersonal(!openPersonal)} style={{ color: "white" }} /><h3>Personal Informations</h3></Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Name
            <Input value={name} placeholder="Name"
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
              }}
              disabled={openPersonal} onChange={(e) => setName(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Mail
            <Input value={mail} placeholder="Email"
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
              }}
              disabled={openPersonal} onChange={(e) => setMail(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Mobile
            <Input value={mobile} placeholder="Mobile"
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
              }}
              disabled={openPersonal} onChange={(e) => setMobile(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Location
            <Select
              showSearch
              placeholder="Select a country"
              optionFilterProp="label"
              onChange={value => setLocation(value)}
              filterOption={(input, option) =>
                (option?.children as unknown as string).toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              disabled={openPersonal}
              defaultValue={location}
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
                borderRadius: "4px"
              }}
            >
              {countries.map((country: any) => (
                <Option key={country.code} value={country.name}>{country.name}</Option>
              ))}
            </Select>
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "55%" }}>
            Gender
            <Radio.Group value={gender} onChange={(e) => { setGender(e.target.value); setDetails(details.gender = e.target.value); }} disabled={openPersonal}>
              <Radio value={"male"} style={{ color: "black" }}>Male</Radio>
              <Radio value={"female"} style={{ color: 'black' }}>Female</Radio>
            </Radio.Group>
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            DOB
            <DatePicker size="middle"
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
              }}
              defaultValue={date} onChange={(value) => setDate(value)} format='DD-MM-YYYY' disabled={openPersonal} />
          </Flex>
        </Flex>
        <Flex vertical className="profileEdit" gap="large">
          <Flex gap="small"><EditOutlined onClick={() => setOpenExperience(!openExperience)} style={{ color: "white" }} /><h3>Experiences</h3></Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Company
            <Input value={company} placeholder="Company"
              style={{
                width: "40%",
                backgroundColor: openExperience ? '#f0f0f0' : 'white',
                color: openExperience ? '#999999' : 'black',
              }}
              disabled={openExperience} onChange={(e) => setCompany(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Role
            <Input value={role} placeholder="Role"
              style={{
                width: "40%",
                backgroundColor: openExperience ? '#f0f0f0' : 'white',
                color: openExperience ? '#999999' : 'black',
              }}
              disabled={openExperience} onChange={(e) => setRole(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Skills
            <Select
              mode="multiple"
              placeholder="Please select"
              defaultValue={skill}
              onChange={(value) => setSkill(value)}
              style={{
                width: "40%",
                backgroundColor: openPersonal ? '#f0f0f0' : 'white',
                color: openPersonal ? '#999999' : 'black',
                borderRadius: "4px"
              }}
              disabled={openExperience}
            >
              {skills.map((item: any) => (
                <Option key={item.id} value={item.name}>{item.name}</Option>
              ))}
            </Select>
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Experience
            <Dropdown overlay={yearMenu} disabled={openExperience}>
              <Flex justify="space-between" style={{
                width: "40%",
                backgroundColor: openExperience ? '#f0f0f0' : 'white',
                color: openExperience ? '#999999' : 'black',
                padding: "8px",
                borderRadius: "5px"
              }}>
                {experience}<DownOutlined />
              </Flex>
            </Dropdown>
          </Flex>
        </Flex>
        <Flex vertical className="profileEdit" gap="large">
          <Flex gap="small"><EditOutlined onClick={() => setOpenEducation(!openEducation)} style={{ color: "white" }} /><h3>Education</h3></Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            College
            <Input value={college} placeholder="College"
              style={{
                width: "40%",
                backgroundColor: openEducation ? '#f0f0f0' : 'white',
                color: openEducation ? '#999999' : 'black',
              }}
              disabled={openEducation} onChange={(e) => setCollege(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            CGPA
            <Input value={cgpa} placeholder="CGPA"
              style={{
                width: "40%",
                backgroundColor: openEducation ? '#f0f0f0' : 'white',
                color: openEducation ? '#999999' : 'black',
              }}
              disabled={openEducation} onChange={(e) => setCgpa(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Stream
            <Input value={stream} placeholder="Stream"
              style={{
                width: "40%",
                backgroundColor: openEducation ? '#f0f0f0' : 'white',
                color: openEducation ? '#999999' : 'black',
              }}
              disabled={openEducation} onChange={(e) => setStream(e.target.value)} />
          </Flex>
          <Flex align="center" justify="space-between" style={{ width: "70%" }}>
            Batch
            <Dropdown overlay={batchMenu} disabled={openEducation}>
              <Flex justify="space-between" style={{
                width: "40%",
                backgroundColor: openEducation ? '#f0f0f0' : 'white',
                color: openEducation ? '#999999' : 'black',
                padding: "8px",
                borderRadius: "5px"
              }}>
                {batch}<DownOutlined />
              </Flex>
            </Dropdown>
          </Flex>
        </Flex>
        <Flex justify="center" style={{ marginTop: "20px" }}>
          {contextHolder}
          <Button type="primary" size="large" style={{ width: "40%", marginBottom: "20px", color: "white", fontWeight: "bold", fontSize: "20px" }} onClick={() => { handleSave(); success(); }}>Save</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Home;
