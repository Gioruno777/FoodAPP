import { Search } from "lucide-react"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type Props = {
    placeHolder: string
}

const Searchbar = ({ placeHolder }: Props) => {
    return (
        <form
            className="flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3"
        >
            <Search
                strokeWidth={2.5}
                size={30}
                className="ml-1 text-orange-500 hidden md:block"
            />
            <Input
                placeholder={placeHolder}
            />

            <Button type="submit" className="rounded-full bg-orange-500">
                Search
            </Button>
        </form>

    )
}

export default Searchbar