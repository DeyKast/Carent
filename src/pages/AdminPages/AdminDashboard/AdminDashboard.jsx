import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import css from './adminDashboard.module.css';
import lamborghiniImage from '../../../img/labmorghini-image.png';

const STATUSES = ['New', 'In progress', 'Canceled', 'Confirmed'];
const STATUS_COLORS = {
  New: 'green',
  'In progress': 'blue',
  Canceled: 'red',
  Confirmed: 'purple',
};

const Card = ({ request, index }) => {
  return (
    <Draggable draggableId={request.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={css.statusCard}
          style={{
            ...provided.draggableProps.style,
            transform: snapshot.isDragging
              ? provided.draggableProps.style?.transform
              : 'none',
            transition: 'transform 0.1s linear, box-shadow 0.2s ease-in-out',
            boxShadow: snapshot.isDragging
              ? '0px 10px 20px rgba(0, 0, 0, 0.3)'
              : 'none',
            opacity: snapshot.isDragging ? 0.9 : 1,
          }}
        >
          <img
            src={lamborghiniImage}
            alt="lamborghini"
            className={css.cardPhoto}
          />
          <div className={css.cardInfo}>
            <p>
              <span style={{ color: STATUS_COLORS[request.status] }}>
                &#9679;
              </span>{' '}
              {request.status}
            </p>
            <p>{request.name}</p>
            <p>{request.phone}</p>
            <p>from: {request.from}</p>
            <p>to: {request.to}</p>
            <p>{request.price}$</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const StatusColumn = ({ status, requests }) => {
  return (
    <Droppable droppableId={status}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={css.dashboardStatus}
        >
          <h2>{status}</h2>
          <div className={css.statusCardsWrapper}>
            {requests.map((request, index) => (
              <Card key={request.id} request={request} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

const AdminDashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Bill Parker',
      phone: '0993133801',
      from: '17.10.25',
      to: '20.10.25',
      price: 540,
      status: 'New',
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '0993133811',
      from: '18.10.25',
      to: '21.10.25',
      price: 600,
      status: 'New',
    },
  ]);

  const onDragEnd = result => {
    if (!result.destination) return;

    setRequests(prevRequests => {
      const updatedRequests = [...prevRequests];

      // Знаходимо картку, яку перетягуємо
      const movedCardIndex = updatedRequests.findIndex(
        req => req.id.toString() === result.draggableId
      );

      if (movedCardIndex === -1) return prevRequests; // Якщо не знайдено - повертаємо поточний стан

      // Отримуємо картку та змінюємо її статус
      const movedCard = { ...updatedRequests[movedCardIndex] };
      movedCard.status = result.destination.droppableId;

      // Видаляємо картку зі старого місця
      updatedRequests.splice(movedCardIndex, 1);

      // Додаємо її у новий список (правильна позиція)
      const destinationIndex = result.destination.index;
      updatedRequests.splice(destinationIndex, 0, movedCard);

      return updatedRequests;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={css.section}>
        <div className={css.container}>
          <h1>Dashboard</h1>
          <div className={css.dashboard}>
            {STATUSES.map(status => (
              <StatusColumn
                key={status}
                status={status}
                requests={requests.filter(req => req.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default AdminDashboard;
