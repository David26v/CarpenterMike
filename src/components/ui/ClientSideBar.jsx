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
  Plug,
  DatabaseBackup,
  Calendar,
  MonitorCogIcon,
  Lock,
  MapPin,
  Wrench,
  Clock,
  LocateIcon,
  Settings2Icon,
  UserPlus,
  Wifi,      
  WifiOff,    
  MonitorPlayIcon
} from "lucide-react";
import { useLoading } from "../providers/LoadingProvider";
import Image from 'next/image';
import useNetworkStatus from '@/hooks/useNetworkStatus'


const ClientAvatar = ({ src, alt, sizeClass = "w-12 h-12" }) => {
  const renderFallback = () => (
    <div className={`${sizeClass} bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-inner`}>
      <Lock className="h-1/2 w-1/2 text-white" />
    </div>
  );

  if (!src) {
    return renderFallback();
  }

  return (
    <div className={`relative rounded-xl shadow-lg overflow-hidden flex-shrink-0 ${sizeClass}`}>
      <Image
        src={src}
        alt={alt || "Client Avatar"}
        fill 
        sizes="(max-width: 768px) 40px, 48px"
        style={{ objectFit: 'cover' }} 
        className="rounded-xl"
        onError={(e) => {
          e.target.style.display = 'none'; 
      
          const parent = e.target.parentElement;
          if (parent && !parent.querySelector('.fallback-avatar')) {
             const fallbackDiv = document.createElement('div');
             fallbackDiv.className = `${sizeClass} bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-inner fallback-avatar`;
             fallbackDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock h-1/2 w-1/2 text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="m7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
             parent.appendChild(fallbackDiv);
          }
        }}
      />
    </div>
  );
};

const AdminSidebar = ({ isOpen, role, clientData }) => { 
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expandedGroups, setExpandedGroups] = useState({});
  const router = useRouter();
  const { show, hide } = useLoading();
  const isOnline = useNetworkStatus(); 

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
  const inactiveStyle = "text-slate-600 hover:text-slate-800";
  const groupStyle = "text-slate-700 hover:bg-slate-50";

  const client_admin_menu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/client_admin/dashboard", type: "single" },

    {
      label: "Locker Management", icon: Lock, type: "group", children: [
        { label: "Doors Assignment", icon: UserCog, path: "/client_admin/locker-management/doors-assignment" },
        { label: "Real Time Doors Usage", icon: MonitorPlayIcon, path: "/client_admin/locker-management/live-monitoring" },
        { label: "Locker Session History", icon: FileClock, type: "single", path: "/client_admin/locker-management/history" },
        { label: "Lockers Settings", icon: Settings2Icon, type: "single", path: "/client_admin/locker-management/settings" },
      ]
    },

    {
      label: "User Management", icon: Users, type: "group", children: [
        { label: "Users", icon: Users2, path: "/client_admin/user-management/users" },
        { label: "Guest", icon: Briefcase, path: "/client_admin/user-management/employees" },
        { label: "Members", icon: Briefcase, path: "/client_admin/user-management/employees" },
      ]
    },
  
    { label: "Profile Settings", icon: Settings, path: "/client_admin/profile", type: "single" },

  ];
  const sidebarItems = role === "client_admin" ? client_admin_menu : [];

  const renderMenuItem = (item) => {
    if (item.type === "single") {
      return (
        <div
          key={item.label}
          onClick={() => handleItemClick(item)}
          className={`flex items-center space-x-3 h-12 px-4 rounded-xl cursor-pointer transition-all duration-200 ${activeItem === item.label
              ? activeStyle
              : `${inactiveStyle} hover:bg-slate-50 hover:shadow-sm`
            }`}
        >
          <div className="flex items-center justify-center w-8">
            <item.icon className={`w-5 h-5 ${activeItem === item.label ? 'text-white' : 'text-slate-600'}`} />
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
                <item.icon className="w-5 h-5 text-slate-600" />
              </div>
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </div>
            {isOpen && (
              <div className="transition-transform duration-200">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            )}
          </div>
          {isOpen && isExpanded && (
            <div className="ml-6 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
              {item.children.map((child) => (
                <div
                  key={child.label}
                  onClick={() => handleItemClick(child)}
                  className={`flex items-center space-x-3 h-10 px-3 rounded-lg cursor-pointer transition-all duration-200 ${activeItem === child.label
                      ? "bg-blue-50 text-blue-600 border-l-2 border-blue-500"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
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

  // AstreuosVault Logo Component
  const AstreuosVaultLogo = ({ size = "w-24" }) => (
    <div className="flex items-center gap-2">
      <div className={`${size === "w-24" ? "w-8 h-8" : "w-6 h-6"} bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md`}>
        <Lock className={`${size === "w-24" ? "w-4 h-4" : "w-3 h-3"} text-white`} />
      </div>
      <div className="flex flex-col">
        <span className={`${size === "w-24" ? "text-lg" : "text-sm"} font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}>
          AstreuosVault
        </span>
        {size === "w-24" && (
          <span className="text-xs text-slate-500">Locker System</span>
        )}
      </div>
    </div>
  );

  return (
    <nav className="h-full bg-white shadow-lg border-r border-slate-200">
      <div className="flex flex-col h-full">
        <div className={`flex items-center gap-3 p-6 border-b border-slate-100 transition-all duration-300 ${isOpen ? "justify-start" : "justify-center"}`}>
          <ClientAvatar
            src={clientData?.avatar_url}
            alt={`Avatar for ${clientData?.name || 'Client'}`}
            sizeClass={isOpen ? "w-12 h-12" : "w-10 h-10"}
          />
          {isOpen && (
            <div className="flex flex-col">
              {/* Display Client Name or Fallback */}
              <span className="text-xl font-bold text-slate-800 truncate max-w-[180px]">
                {clientData?.name || "Client Name"}
              </span>
              <span className="text-xs text-slate-500 capitalize">Admin Panel</span>
            </div>
          )}
        </div>
        {/* --- End Updated Header --- */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item) => renderMenuItem(item))}
          </div>
        </div>
        {isOpen && (
          <div className="p-4 border-t border-slate-100">
            <div className="flex justify-center mb-3">
              <AstreuosVaultLogo size="w-24" />
            </div>
       
            <div className="flex items-center justify-center mb-2">
              {isOnline ? (
                <div className="flex items-center text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <Wifi className="w-3 h-3 mr-1" />
                  <span>Online</span>
                </div>
              ) : (
                <div className="flex items-center text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full animate-pulse">
                  <WifiOff className="w-3 h-3 mr-1" />
                  <span>Offline</span>
                </div>
              )}
            </div>
            {/* --- End Network Status Indicator --- */}

            <div className="text-xs text-slate-400 text-center">
              © AstreuosVault Secure Locker System. All rights reserved.
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminSidebar;