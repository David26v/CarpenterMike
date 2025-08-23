"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  UserCog,
  User2,
  CalendarDays,
  Wallet,
  Briefcase,
  BarChart,
  Activity,
  Settings,
  FileClock,
  ClipboardCheck,
  ChevronDown,
  ChevronRight,
  Users,
  Building2,
  UserCheck,
  TrendingUp,
  Shield,
  CalendarCog,
  Tv,
  TvMinimalPlayIcon,
  Users2,
  Megaphone, 
  MessageCircle, 
  Mail, 
  FileText as FileTextDoc,
  BookOpen, 
  Newspaper, 
  Settings2, 
  Timer, 
  ListTodo, 
  Plug, 
  DatabaseBackup, 
  Award, 
  Target, 
  UserPlus, 
  NotebookPen, 
  CalendarCheck2, 
  ArrowRightToLine,
  Receipt, 
  WalletCards,
  Scale, 
  Calendar,
  MonitorCogIcon, 
} from "lucide-react";
import { useLoading } from "../providers/LoadingProvider";



const AdminSidebar = ({ isOpen, role }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expandedGroups, setExpandedGroups] = useState({});
  const router = useRouter();
  const { show, hide } = useLoading();

  const handleItemClick = async (item) => {
    setActiveItem(item.label);
    show("Loading module...");
    await new Promise(res => setTimeout(res, 300));
    router.push(item.path);
    setTimeout(() => {
      hide();
    }, 300);
  };

  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const activeStyle = "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105";
  const inactiveStyle = "text-gray-600 hover:text-gray-800";
  const groupStyle = "text-gray-700 hover:bg-gray-100";

  const adminMenu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard", type: "single" },
    {
      label: "Website", icon: Tv, type: "group", children: [
        { label: "Monitor", icon: TvMinimalPlayIcon, path: "/admin/live-monitoring/live-monitor" },
        { label: "Monitoring Settings", icon: MonitorCogIcon, path: "/admin/live-monitoring/monitoring-settings" },
      ]
    },
    {
      label: "Emails", icon: Tv, type: "group", children: [
        { label: "Monitor", icon: TvMinimalPlayIcon, path: "/admin/live-monitoring/live-monitor" },
        { label: "Monitoring Settings", icon: MonitorCogIcon, path: "/admin/live-monitoring/monitoring-settings" },
      ]
    },
    {
      label: "Projects", icon: Tv, type: "group", children: [
        { label: "Monitor", icon: TvMinimalPlayIcon, path: "/admin/live-monitoring/live-monitor" },
        { label: "Monitoring Settings", icon: MonitorCogIcon, path: "/admin/live-monitoring/monitoring-settings" },
      ]
    },
    {
      label: "Clients", icon: Tv, type: "group", children: [
        { label: "Monitor", icon: TvMinimalPlayIcon, path: "/admin/live-monitoring/live-monitor" },
        { label: "Monitoring Settings", icon: MonitorCogIcon, path: "/admin/live-monitoring/monitoring-settings" },
      ]
    },
   
  ];
  // --- END UPDATED ADMIN SIDEBAR ---

  // Only show the admin menu if the role is 'admin'
  const sidebarItems = role === "admin" ? adminMenu : [];

  const renderMenuItem = (item) => {
    if (item.type === "single") {
      return (
        <div
          key={item.label}
          onClick={() => handleItemClick(item)}
          className={`flex items-center space-x-3 h-12 px-4 rounded-xl cursor-pointer transition-all duration-200 ${
            activeItem === item.label
              ? activeStyle
              : `${inactiveStyle} hover:bg-gray-50 hover:shadow-sm`
          }`}
        >
          <div className="flex items-center justify-center w-8">
            <item.icon className={`w-5 h-5 ${activeItem === item.label ? 'text-white' : 'text-gray-600'}`} />
          </div>
          {isOpen && <span className="text-sm font-medium">{item.label}</span>}
        </div>
      );
    }

    if (item.type === "group") {
      const isExpanded = expandedGroups[item.label];
      return (
        <div key={item.label} className="mb-1">
          <div
            className={`flex items-center justify-between space-x-3 h-12 px-4 rounded-xl cursor-pointer transition-all duration-200 ${groupStyle}`}
            onClick={() => toggleGroup(item.label)}
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </div>
            {isOpen && (
              <div className="transition-transform duration-200">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </div>
            )}
          </div>

          {isOpen && isExpanded && (
            <div className="ml-6 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
              {item.children.map((child) => (
                <div
                  key={child.label}
                  onClick={() => handleItemClick(child)}
                  className={`flex items-center space-x-3 h-10 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeItem === child.label
                      ? "bg-blue-50 text-blue-600 border-l-2 border-blue-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <child.icon className="w-4 h-4" />
                  <span className="text-sm">{child.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return null; 
  };


  return (
    <nav className="h-full bg-white shadow-lg border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className={`flex items-center gap-3 p-6 border-b border-gray-100 transition-all duration-300 ${isOpen ? "justify-start" : "justify-center"}`}>
          {isOpen && (
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Zentryx</span>
              <span className="text-xs text-gray-500 capitalize">{role} Panel</span>
            </div>
          )}
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item) => renderMenuItem(item))}
          </div>
        </div>

        {isOpen && (
          <div className="p-4 border-t border-gray-100">
            <div className="text-xs text-gray-400 text-center">
              © 2025 Mike admin - Your Custom landing Page Management System
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminSidebar;
