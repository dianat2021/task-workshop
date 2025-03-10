import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

const toggleCompletion = async (id, taskRow) => {
  try {
    const taskToCross = doc(database, "tasks", id);
    const taskSnapshot = await getDoc(taskToCross);

    const currentIsCompletedState = taskSnapshot.data().isCompleted;
    const updatedIsCompletedProperty = !currentIsCompletedState;

    updateDoc(taskToCross, {
      isCompleted: updatedIsCompletedProperty,
    });
    if (updatedIsCompletedProperty) {
      taskRow.classList.add("task--completed");
    } else {
      taskRow.classList.remove("task--completed");
    }
  } catch (error) {
    console.log(error, "Error updating the isComplete property");
  }
};

export default toggleCompletion;
