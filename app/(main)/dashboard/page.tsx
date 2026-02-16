import { CirclePlus } from "@/components/animate-ui/icons/circle-plus";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import CreateAccountDialog from "@/components/create-account-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CirclePlusIcon } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="px-5">
      {/* Budget Process */}

      {/* Overview */}

      {/* Accounts */}
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        <CreateAccountDialog>
        <Button className="w-32 h-12 place-items-center gap-2">
        <CirclePlusIcon/> 
          <p className="text-sm font-medium">Add Account</p>
          </Button>
        </CreateAccountDialog>
      </div>
    </div>
  )
};

export default DashboardPage;
