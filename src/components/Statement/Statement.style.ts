import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 20px;
`;

export const DataRow = styled.div`
  background-color: #f8f7f5;
  display: flex;
  min-height: 50px;
  align-items: center;
  border-bottom: solid 1px #e1e1de;
  font-weight: 100;

  &:hover {
    color: #098b8c;
  }

  @media (max-width: 640px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const HeaderRow = styled(DataRow)`
  background-color: #ffffff;
  display: flex;
  color: #098b8c;
  font-weight: bold;
  height: 50px;
  align-items: center;
`;

export const DateRow = styled.span`
  width: 10%;
  padding: 0px 10px 0px 10px;
`;
export const CompanyRow = styled.span`
  font-weight: 500;
  width: 40%;
  line-break: anywhere;
`;
export const AccountRow = styled.span`
  padding-left: 10px;
  width: 40%;
  line-break: anywhere;
`;
export const AmountRow = styled.span`
  font-weight: 500;
  text-align: right;
  padding-right: 20px;
  width: 120px;
`;
