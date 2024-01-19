import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDataProps } from "@/types";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";

const Addform = ({
  setIsAddOpen,
  storedData,
}: Pick<IDataProps, "setIsAddOpen" | "storedData" | "allData">) => {
  const filtered = [...new Set(storedData.map((product) => product.category))];
  const CategoryEnum = z.enum([
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ]);
  const formSchema = z.object({
    id: z.number(),
    title: z.string().min(5).max(255),
    price: z.number().min(1),
    description: z.string().max(1000),
    image: z.string(),
    category: CategoryEnum,
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  });

  const { addProducts, adds, deletes } = useStore();
  const allData = [...storedData, ...adds, ...deletes];
  console.log(allData);
  console.log(allData.length);
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    addProducts(data);
    setIsAddOpen(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: allData.length + 1,
      title: "",
      price: 1,
      description: "",
      image: "",
      category: "jewelery",
      rating: {
        rate: 1,
        count: 1,
      },
    },
  });
  return (
    <>
      <div className="absolute top-0 left-0 flex items-center justify-center bg-transparent size-full">
        <div className="flex flex-col gap-8  t-[50%] l-[50%] z-50 m-auto justify-center p-8 w-96 bg-white rounded-2xl shadow-xl">
          <h2 className="self-center text-xl">Add a product</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Price"
                        {...field}
                        required
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Category</SelectLabel>
                            {filtered.map((product, index) => {
                              return (
                                <SelectItem
                                  value={product}
                                  key={index}
                                >
                                  {product}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end w-full">
                {" "}
                <Button
                  variant="secondary"
                  type="submit"
                >
                  Add new product
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 z-40 flex items-center justify-center bg-black/50 size-full"
        onClick={() => setIsAddOpen(false)}
      ></div>
    </>
  );
};

export default Addform;
