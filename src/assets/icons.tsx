/* eslint-disable react/require-default-props */
import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

interface iconProps extends TextInputProps {
  size?: number;
  color?: string;
  onPress?: any;
}

const Email = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="mail" />
);
const Lock = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="lock" />
);
const Key = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="key" />
);
const User = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="user" />
);
const Phone = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="phone" />
);
const Home = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="home" />
);
const LogOut = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="sign-out-alt" />
);
const UserReload = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="user-friends" />
);
const Trash = (props: iconProps): React.ReactElement => (
  <Feather {...props} name="trash" />
);
const Company = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="building" />
);
const Menu = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="bars" />
);
const Request = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="shopping-bag" />
);
const Config = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="cogs" />
);
const Clients = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="users" />
);
const Payment = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="money-check-alt" />
);
const Products = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="cubes" />
);
const Dashboard = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="tachometer-alt" />
);
const LogOutMenu = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="times-circle" />
);
const MailsRead = (props: iconProps): React.ReactElement => (
  <MaterialIcons {...props} name="inbox" />
);
const MailsUnread = (props: iconProps): React.ReactElement => (
  <MaterialIcons {...props} name="all-inbox" />
);
const ArrowRight = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="arrow-circle-right" />
);
const Close = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="times-circle" />
);
const Invoice = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="file-invoice-dollar" />
);
const Add = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="plus-circle" />
);
const BackMenu = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="arrow-circle-left" />
);
const OptionsMenu = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="stream" />
);
const DotsVertical = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="ellipsis-v" />
);
const SearchPlus = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="search-plus" />
);
const Percent = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="percent" />
);
const DollarSign = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="dollar-sign" />
);
const OptionsSubMenu = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="ellipsis-v" />
);
const Minus = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="minus" />
);
const Plus = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="plus" />
);
const BarCodeScan = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="barcode" />
);
const Eye = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="eye" />
);
const Pencil = (props: iconProps): React.ReactElement => (
  <FontAwesome5 {...props} name="pencil-alt" />
);
export {
  Email,
  Lock,
  Key,
  User,
  Phone,
  Home,
  LogOut,
  Trash,
  Company,
  Menu,
  UserReload,
  Dashboard,
  Request,
  Config,
  Clients,
  Payment,
  Products,
  LogOutMenu,
  MailsRead,
  MailsUnread,
  ArrowRight,
  Invoice,
  Add,
  BackMenu,
  OptionsMenu,
  DotsVertical,
  Close,
  SearchPlus,
  Percent,
  DollarSign,
  OptionsSubMenu,
  Minus,
  Plus,
  BarCodeScan,
  Eye,
  Pencil,
};
