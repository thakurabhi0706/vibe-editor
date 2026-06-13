import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";

import Image from "next/image";

export default async function Home() {
   
  return (
    <div> 
      <Button>
        get started
      </Button>
      <UserButton> 
      </UserButton>
    </div>
  );
}
